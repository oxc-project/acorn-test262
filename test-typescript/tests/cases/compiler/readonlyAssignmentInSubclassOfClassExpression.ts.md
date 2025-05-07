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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 138,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 136,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 86,
              "end": 136,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 89,
                "end": 136,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 99,
                    "end": 106,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 99,
                      "end": 106,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 99,
                        "end": 104
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 115,
                    "end": 130,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 115,
                      "end": 130,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 115,
                        "end": 126,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 115,
                          "end": 119
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 126,
                          "decorators": [],
                          "name": "attrib",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 129,
                        "end": 130,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": {
        "type": "TSAsExpression",
        "start": 17,
        "end": 67,
        "expression": {
          "type": "ClassExpression",
          "start": 17,
          "end": 25,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 23,
            "end": 25,
            "body": []
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "start": 29,
          "end": 67,
          "abstract": false,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 67,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 39,
              "end": 67,
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
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 50,
                          "end": 56,
                          "decorators": [],
                          "name": "attrib",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 56,
                          "end": 64,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 58,
                            "end": 64
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 39,
                "end": 47,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
