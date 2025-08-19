__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 14,
                    "end": 18
                  },
                  "value": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 20,
                    "end": 22
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 14,
                  "end": 22
                },
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "self",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 30,
                    "end": 34
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 50,
                            "end": 51
                          },
                          "start": 43,
                          "end": 52
                        }
                      ],
                      "start": 37,
                      "end": 56
                    },
                    "expression": false,
                    "start": 34,
                    "end": 56
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 26,
                  "end": 56
                }
              ],
              "start": 10,
              "end": 59
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 76
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 78,
                      "end": 84
                    },
                    "start": 76,
                    "end": 84
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 72,
                  "end": 85
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "self",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 86,
                    "end": 90
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 92,
                      "end": 95
                    },
                    "start": 90,
                    "end": 95
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 86,
                  "end": 95
                }
              ],
              "start": 70,
              "end": 97
            },
            "start": 10,
            "end": 97
          },
          "definite": false,
          "start": 6,
          "end": 97
        }
      ],
      "declare": false,
      "start": 0,
      "end": 98
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 110
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 113,
                        "end": 114
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "self",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 115,
                        "end": 119
                      },
                      "optional": false,
                      "computed": false,
                      "start": 113,
                      "end": 119
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 120,
                      "end": 124
                    },
                    "optional": false,
                    "computed": false,
                    "start": 113,
                    "end": 124
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "self",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 129
                  },
                  "optional": false,
                  "computed": false,
                  "start": 113,
                  "end": 129
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "self",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 134
                },
                "optional": false,
                "computed": false,
                "start": 113,
                "end": 134
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "self",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 139
              },
              "optional": false,
              "computed": false,
              "start": 113,
              "end": 139
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 144
            },
            "optional": false,
            "computed": false,
            "start": 113,
            "end": 144
          },
          "definite": false,
          "start": 106,
          "end": 144
        }
      ],
      "declare": false,
      "start": 100,
      "end": 145
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 145
}
```
