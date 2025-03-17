__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 220,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 6,
            "end": 10,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 19,
            "end": 22,
            "left": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "value": 3,
              "raw": "3"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 26,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 32,
            "end": 38,
            "left": {
              "type": "Literal",
              "start": 32,
              "end": 33,
              "value": 3,
              "raw": "3"
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 34,
              "end": 38,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 52,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "value": null,
              "raw": "null"
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
              "callee": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 107,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 117,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "value": null,
              "raw": "null"
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
              "value": 3,
              "raw": "3"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 155,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 166,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 167,
        "end": 195,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 173,
            "end": 179,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 178,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 175,
                "end": 178
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 184,
            "end": 193,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 192,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 186,
                "end": 192
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 203,
            "name": "w",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 203,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 202,
                "end": 203,
                "typeName": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 206,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 207,
                  "end": 211,
                  "value": null,
                  "raw": "null"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 212,
                "end": 215,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 214,
                  "end": 215,
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "optional": false
              }
            ]
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
