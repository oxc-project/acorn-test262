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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 45,
            "name": "obj",
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
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 25,
                        "end": 34,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 26,
                          "end": 34,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 28,
                            "end": 34
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 35,
                      "end": 43,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 37,
                        "end": 43
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 53,
                  "end": 55,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 57,
                "end": 61,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "name": "q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 83,
            "name": "arr",
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
            },
            "decorators": [],
            "optional": false
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
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
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
