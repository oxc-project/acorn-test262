__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 228,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 16,
      "end": 228,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 228,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 35,
            "end": 54,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 39,
                "end": 53,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 48,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 48,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 42,
                      "end": 48
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 51,
                  "end": 53,
                  "raw": "12",
                  "value": 12,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 59,
            "end": 78,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 63,
                "end": 77,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 72,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 66,
                      "end": 72
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 75,
                  "end": 77,
                  "raw": "13",
                  "value": 13,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 83,
            "end": 101,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 87,
                "end": 100,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 93,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 96,
                  "end": 100,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 106,
            "end": 135,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 112,
                "end": 134,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 114,
                  "decorators": [],
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 117,
                  "end": 134,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 119,
                      "end": 124,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 122,
                        "end": 124,
                        "properties": []
                      }
                    },
                    {
                      "type": "Property",
                      "start": 126,
                      "end": 132,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 128,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 132,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 140,
            "end": 169,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 146,
                "end": 168,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 148,
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 151,
                  "end": 168,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 153,
                      "end": 158,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 156,
                        "end": 158,
                        "properties": []
                      }
                    },
                    {
                      "type": "Property",
                      "start": 160,
                      "end": 166,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 162,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 174,
            "end": 226,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 180,
                "end": 225,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 182,
                  "decorators": [],
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 185,
                  "end": 225,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 187,
                      "end": 193,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 189,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 193,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 195,
                      "end": 200,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 198,
                        "end": 200,
                        "properties": []
                      }
                    },
                    {
                      "type": "Property",
                      "start": 202,
                      "end": 208,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 204,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 208,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 210,
                      "end": 215,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 213,
                        "end": 215,
                        "properties": []
                      }
                    },
                    {
                      "type": "Property",
                      "start": 217,
                      "end": 223,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 219,
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 223,
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
