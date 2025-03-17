__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "TSAsExpression",
        "start": 17,
        "end": 67,
        "expression": {
          "type": "ClassExpression",
          "start": 17,
          "end": 25,
          "id": null,
          "superClass": null,
          "body": {
            "type": "ClassBody",
            "start": 23,
            "end": 25,
            "body": []
          },
          "decorators": [],
          "typeParameters": null,
          "implements": [],
          "abstract": false,
          "declare": false,
          "superTypeArguments": null
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "start": 29,
          "end": 67,
          "abstract": false,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 67,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 39,
              "end": 67,
              "typeName": {
                "type": "Identifier",
                "start": 39,
                "end": 47,
                "name": "Readonly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 47,
                "end": 67,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 48,
                    "end": 66,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 50,
                        "end": 64,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 50,
                          "end": 56,
                          "name": "attrib",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 56,
                          "end": 64,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 58,
                            "end": 64
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          }
        }
      },
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 138,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 136,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 86,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 86,
              "end": 136,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 89,
                "end": 136,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 99,
                    "end": 106,
                    "expression": {
                      "type": "CallExpression",
                      "start": 99,
                      "end": 106,
                      "callee": {
                        "type": "Super",
                        "start": 99,
                        "end": 104
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 115,
                    "end": 130,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 115,
                      "end": 130,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 115,
                        "end": 126,
                        "object": {
                          "type": "ThisExpression",
                          "start": 115,
                          "end": 119
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 126,
                          "name": "attrib",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 129,
                        "end": 130,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
