__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 210,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 111,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 111,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 75,
                "end": 111,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 76,
                    "end": 86,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 79,
                      "end": 86,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 82,
                        "end": 86
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 91,
                    "end": 110,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 92,
                        "end": 101,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 93,
                          "end": 101,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 95,
                            "end": 101
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 110,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 106,
                        "end": 110
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 137,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 137,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 131,
                "end": 137
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 159,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 159,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 156,
                "end": 159
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 179,
      "expression": {
        "type": "CallExpression",
        "start": 162,
        "end": 178,
        "arguments": [
          {
            "type": "Literal",
            "start": 170,
            "end": 174,
            "raw": "null",
            "value": null
          },
          {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 162,
          "end": 169,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 162,
            "end": 164,
            "decorators": [],
            "name": "fn",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 165,
            "end": 169,
            "decorators": [],
            "name": "call",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 180,
      "end": 197,
      "expression": {
        "type": "CallExpression",
        "start": 180,
        "end": 196,
        "arguments": [
          {
            "type": "Literal",
            "start": 188,
            "end": 192,
            "raw": "null",
            "value": null
          },
          {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 180,
          "end": 187,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 180,
            "end": 182,
            "decorators": [],
            "name": "fn",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 183,
            "end": 187,
            "decorators": [],
            "name": "call",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 199,
      "end": 209,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
