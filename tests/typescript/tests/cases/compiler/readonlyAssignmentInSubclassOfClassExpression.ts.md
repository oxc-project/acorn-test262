__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 138,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "TSAsExpression",
        "start": 17,
        "end": 67,
        "expression": {
          "type": "ClassExpression",
          "start": 17,
          "end": 25,
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "start": 23,
            "end": 25,
            "body": []
          },
          "abstract": false,
          "declare": false
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
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
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
                          "decorators": [],
                          "name": "attrib",
                          "optional": false,
                          "typeAnnotation": null
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
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 138,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 136,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 86,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 86,
              "end": 136,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
                          "decorators": [],
                          "name": "attrib",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
