__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
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
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 45,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 22,
                "end": 45,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 24,
                    "end": 43,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 25,
                        "end": 34,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 26,
                          "end": 34,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 28,
                            "end": 34
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 35,
                      "end": 43,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 37,
                        "end": 43
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 48,
            "end": 63,
            "properties": [
              {
                "type": "Property",
                "start": 50,
                "end": 55,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 53,
                  "end": 55,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 57,
                "end": 61,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 93,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 83,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 83,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 75,
                "end": 83,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 75,
                  "end": 81
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 86,
            "end": 93,
            "elements": [
              {
                "type": "Literal",
                "start": 87,
                "end": 89,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
