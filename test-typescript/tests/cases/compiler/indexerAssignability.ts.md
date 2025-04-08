__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 31,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 31,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 31,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 9,
                    "end": 29,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 10,
                        "end": 19,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 11,
                          "end": 19,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 13,
                            "end": 19
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 20,
                      "end": 28,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 22,
                        "end": 28
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 64,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 64,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 40,
                "end": 64,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 42,
                    "end": 62,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 43,
                        "end": 52,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 44,
                          "end": 52,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 46,
                            "end": 52
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 53,
                      "end": 61,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 55,
                        "end": 61
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 75,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 73,
                "end": 75,
                "members": []
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
      "type": "ExpressionStatement",
      "start": 78,
      "end": 84,
      "expression": {
        "type": "AssignmentExpression",
        "start": 78,
        "end": 83,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 78,
          "end": 79,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 82,
          "end": 83,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 91,
      "expression": {
        "type": "AssignmentExpression",
        "start": 85,
        "end": 90,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 85,
          "end": 86,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 89,
          "end": 90,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 92,
      "end": 98,
      "expression": {
        "type": "AssignmentExpression",
        "start": 92,
        "end": 97,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 92,
          "end": 93,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 96,
          "end": 97,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 105,
      "expression": {
        "type": "AssignmentExpression",
        "start": 99,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 99,
          "end": 100,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 112,
      "expression": {
        "type": "AssignmentExpression",
        "start": 106,
        "end": 111,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 110,
          "end": 111,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 119,
      "expression": {
        "type": "AssignmentExpression",
        "start": 113,
        "end": 118,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 113,
          "end": 114,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 117,
          "end": 118,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
