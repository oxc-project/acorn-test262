__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 181,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 34,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 32,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 73,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 54,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 54,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 43,
                "end": 54,
                "elementType": {
                  "type": "TSFunctionType",
                  "start": 44,
                  "end": 51,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 47,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 50,
                      "end": 51,
                      "typeName": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 57,
            "end": 72,
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "start": 58,
                "end": 71,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "NewExpression",
                  "start": 64,
                  "end": 71,
                  "callee": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "id": null,
                "generator": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 98,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 97,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 82,
            "end": 97,
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "start": 83,
                "end": 96,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "NewExpression",
                  "start": 89,
                  "end": 96,
                  "callee": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "id": null,
                "generator": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 150,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 125,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 125,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 107,
                "end": 125,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 108,
                    "end": 115,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 111,
                      "end": 115,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 114,
                        "end": 115,
                        "typeName": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 115,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 119,
                    "end": 125
                  }
                ]
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 128,
            "end": 149,
            "left": {
              "type": "ArrowFunctionExpression",
              "start": 129,
              "end": 142,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "NewExpression",
                "start": 135,
                "end": 142,
                "callee": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "id": null,
              "generator": false
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "start": 147,
              "end": 149,
              "value": "",
              "raw": "\"\""
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 181,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 159,
            "end": 180,
            "left": {
              "type": "ArrowFunctionExpression",
              "start": 160,
              "end": 173,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "NewExpression",
                "start": 166,
                "end": 173,
                "callee": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 171,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "id": null,
              "generator": false
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "start": 178,
              "end": 180,
              "value": "",
              "raw": "\"\""
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
