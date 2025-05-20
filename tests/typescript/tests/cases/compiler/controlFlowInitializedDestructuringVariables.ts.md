__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 45,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 19,
                "end": 45,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 21,
                    "end": 32,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 21,
                      "end": 22,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 23,
                      "end": 31,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 25,
                        "end": 31
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 33,
                    "end": 43,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 87,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 53,
            "end": 81,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 59,
                "end": 66,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 60,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 59,
                  "end": 66,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 63,
                    "end": 66,
                    "raw": "\"0\"",
                    "value": "0"
                  },
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 72,
                "end": 78,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 72,
                  "end": 78,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 73,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "start": 76,
                    "end": 78,
                    "argument": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 78,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "+",
                    "prefix": true
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 84,
            "end": 87,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
