__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 216,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 33,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 17,
                "end": 33,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 18,
                    "end": 24
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 26,
                    "end": 32
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 84,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 84,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 84,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 54,
                "end": 84,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 55,
                    "end": 61
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 63,
                    "end": 69
                  },
                  {
                    "type": "TSRestType",
                    "start": 71,
                    "end": 83,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 74,
                      "end": 83,
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 74,
                        "end": 81
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 101,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 94,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 97,
            "end": 101,
            "object": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 99,
              "end": 100,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 117,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 110,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 113,
            "end": 117,
            "object": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 115,
              "end": 116,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 136,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 126,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 129,
            "end": 136,
            "object": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 131,
              "end": 135,
              "value": 1000,
              "raw": "1000"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 156,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 156,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 146,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 149,
            "end": 156,
            "object": {
              "type": "Identifier",
              "start": 149,
              "end": 153,
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 154,
              "end": 155,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 157,
      "end": 175,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 175,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 165,
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 168,
            "end": 175,
            "object": {
              "type": "Identifier",
              "start": 168,
              "end": 172,
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 173,
              "end": 174,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 194,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 184,
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 187,
            "end": 194,
            "object": {
              "type": "Identifier",
              "start": 187,
              "end": 191,
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 192,
              "end": 193,
              "value": 3,
              "raw": "3"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 195,
      "end": 216,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 216,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 203,
            "decorators": [],
            "name": "a7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 206,
            "end": 216,
            "object": {
              "type": "Identifier",
              "start": 206,
              "end": 210,
              "decorators": [],
              "name": "rest",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 211,
              "end": 215,
              "value": 1000,
              "raw": "1000"
            },
            "optional": false,
            "computed": true
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
