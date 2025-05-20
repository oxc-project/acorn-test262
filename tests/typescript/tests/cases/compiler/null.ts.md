__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 219,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 6,
            "end": 10,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 19,
            "end": 22,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "raw": "3",
              "value": 3
            },
            "right": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 32,
            "end": 38,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 32,
              "end": 33,
              "raw": "3",
              "value": 3
            },
            "right": {
              "type": "Literal",
              "start": 34,
              "end": 38,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 52,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 52,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 106,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 106,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 72,
            "end": 84,
            "argument": {
              "type": "Literal",
              "start": 79,
              "end": 83,
              "raw": "null",
              "value": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 89,
            "end": 104,
            "argument": {
              "type": "NewExpression",
              "start": 96,
              "end": 103,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 107,
      "end": 154,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 120,
        "end": 154,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 126,
            "end": 138,
            "argument": {
              "type": "Literal",
              "start": 133,
              "end": 137,
              "raw": "null",
              "value": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 143,
            "end": 152,
            "argument": {
              "type": "Literal",
              "start": 150,
              "end": 151,
              "raw": "3",
              "value": 3
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 155,
      "end": 195,
      "body": {
        "type": "TSInterfaceBody",
        "start": 167,
        "end": 195,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 173,
            "end": 179,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 178,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 175,
                "end": 178
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 184,
            "end": 193,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 192,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 186,
                "end": 192
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 196,
      "end": 217,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 216,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 203,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 203,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 202,
                "end": 203,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 204,
            "end": 216,
            "properties": [
              {
                "type": "Property",
                "start": 205,
                "end": 211,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 206,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 207,
                  "end": 211,
                  "raw": "null",
                  "value": null
                }
              },
              {
                "type": "Property",
                "start": 212,
                "end": 215,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 214,
                  "end": 215,
                  "raw": "3",
                  "value": 3
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
