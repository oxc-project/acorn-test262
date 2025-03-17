__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 217,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 33,
            "name": "a",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 84,
            "name": "rest",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 94,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 97,
            "end": 101,
            "object": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 99,
              "end": 100,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 110,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 113,
            "end": 117,
            "object": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 115,
              "end": 116,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 126,
            "name": "a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 129,
            "end": 136,
            "object": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 131,
              "end": 135,
              "value": 1000,
              "raw": "1000"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 156,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 146,
            "name": "a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 149,
            "end": 156,
            "object": {
              "type": "Identifier",
              "start": 149,
              "end": 153,
              "name": "rest",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 154,
              "end": 155,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 157,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 175,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 165,
            "name": "a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 168,
            "end": 175,
            "object": {
              "type": "Identifier",
              "start": 168,
              "end": 172,
              "name": "rest",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 173,
              "end": 174,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 184,
            "name": "a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 187,
            "end": 194,
            "object": {
              "type": "Identifier",
              "start": 187,
              "end": 191,
              "name": "rest",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 192,
              "end": 193,
              "value": 3,
              "raw": "3"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 195,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 216,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 203,
            "name": "a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 206,
            "end": 216,
            "object": {
              "type": "Identifier",
              "start": 206,
              "end": 210,
              "name": "rest",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 211,
              "end": 215,
              "value": 1000,
              "raw": "1000"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
