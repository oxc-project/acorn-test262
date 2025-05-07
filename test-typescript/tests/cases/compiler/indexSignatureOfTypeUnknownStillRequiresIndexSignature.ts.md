__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 210,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 74,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 48,
          "end": 69,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 69,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 51,
              "end": 69,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 53,
                  "end": 67,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 54,
                      "end": 63,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 55,
                        "end": 63,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 57,
                          "end": 63
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 67,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 66,
                      "end": 67,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 70,
        "end": 73,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 72,
          "end": 73,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 46,
            "const": false,
            "constraint": {
              "type": "TSUnknownKeyword",
              "start": 29,
              "end": 36
            },
            "default": {
              "type": "TSUnknownKeyword",
              "start": 39,
              "end": 46
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 180,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 87,
            "decorators": [],
            "name": "stooges",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 90,
            "end": 180,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 94,
                "end": 118,
                "properties": [
                  {
                    "type": "Property",
                    "start": 96,
                    "end": 107,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 100,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 102,
                      "end": 107,
                      "raw": "\"moe\"",
                      "value": "moe",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 109,
                    "end": 116,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 112,
                      "decorators": [],
                      "name": "age",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 114,
                      "end": 116,
                      "raw": "40",
                      "value": 40,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 122,
                "end": 148,
                "properties": [
                  {
                    "type": "Property",
                    "start": 124,
                    "end": 137,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 128,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 130,
                      "end": 137,
                      "raw": "\"larry\"",
                      "value": "larry",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 139,
                    "end": 146,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 142,
                      "decorators": [],
                      "name": "age",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 144,
                      "end": 146,
                      "raw": "50",
                      "value": 50,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 152,
                "end": 178,
                "properties": [
                  {
                    "type": "Property",
                    "start": 154,
                    "end": 167,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 158,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 160,
                      "end": 167,
                      "raw": "\"curly\"",
                      "value": "curly",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 169,
                    "end": 176,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 172,
                      "decorators": [],
                      "name": "age",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 174,
                      "end": 176,
                      "raw": "60",
                      "value": 60,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 194,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 183,
        "end": 193,
        "arguments": [
          {
            "type": "Identifier",
            "start": 185,
            "end": 192,
            "decorators": [],
            "name": "stooges",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 183,
          "end": 184,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
