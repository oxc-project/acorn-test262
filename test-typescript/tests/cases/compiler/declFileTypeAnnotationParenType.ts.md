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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 32,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 54,
            "name": "x",
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
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "NewExpression",
                  "start": 64,
                  "end": 71,
                  "callee": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 97,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "NewExpression",
                  "start": 89,
                  "end": 96,
                  "callee": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 125,
            "name": "k",
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
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 128,
            "end": 149,
            "left": {
              "type": "ArrowFunctionExpression",
              "start": 129,
              "end": 142,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "NewExpression",
                "start": 135,
                "end": 142,
                "callee": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": null
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "name": "l",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 159,
            "end": 180,
            "left": {
              "type": "ArrowFunctionExpression",
              "start": 160,
              "end": 173,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "NewExpression",
                "start": 166,
                "end": 173,
                "callee": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 171,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": null
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
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
