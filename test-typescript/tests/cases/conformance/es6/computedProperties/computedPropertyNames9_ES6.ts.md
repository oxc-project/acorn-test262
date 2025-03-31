__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 20,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 20,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 14,
              "end": 20
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 21,
        "end": 29,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 23,
          "end": 29
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 31,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 42,
          "end": 51,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 51,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 45,
              "end": 51
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 52,
        "end": 60,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 54,
          "end": 60
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 62,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 76,
          "end": 80,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 80,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 79,
              "end": 80,
              "typeName": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 72,
        "end": 75,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 73,
            "end": 74,
            "name": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 81,
        "end": 84,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 83,
          "end": 84,
          "typeName": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 86,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 105,
        "end": 108,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 99,
        "end": 104,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 101,
          "end": 104
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 169,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 118,
            "end": 169,
            "properties": [
              {
                "type": "Property",
                "start": 124,
                "end": 134,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 125,
                  "end": 130,
                  "callee": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 127,
                      "end": 129,
                      "value": "",
                      "raw": "\"\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "value": {
                  "type": "Literal",
                  "start": 133,
                  "end": 134,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 140,
                "end": 149,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 141,
                  "end": 145,
                  "callee": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 143,
                      "end": 144,
                      "value": 0,
                      "raw": "0"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "value": {
                  "type": "Literal",
                  "start": 148,
                  "end": 149,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 155,
                "end": 167,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 156,
                  "end": 163,
                  "callee": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 157,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 158,
                      "end": 162,
                      "value": true,
                      "raw": "true"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "value": {
                  "type": "Literal",
                  "start": 166,
                  "end": 167,
                  "value": 0,
                  "raw": "0"
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
