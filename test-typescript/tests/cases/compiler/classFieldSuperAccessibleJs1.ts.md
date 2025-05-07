__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 33,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 31,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 24,
              "decorators": [],
              "name": "blah1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 27,
              "end": 30,
              "raw": "123",
              "value": 123,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 34,
      "end": 48,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 34,
        "end": 47,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 34,
          "end": 41,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 36,
            "end": 41,
            "decorators": [],
            "name": "blah2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 44,
          "end": 47,
          "raw": "456",
          "value": 456,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 50,
      "end": 146,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 68,
        "end": 146,
        "body": [
          {
            "type": "StaticBlock",
            "start": 72,
            "end": 144,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 85,
                "end": 110,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 85,
                  "end": 109,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 97,
                      "end": 108,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 97,
                        "end": 102
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 103,
                        "end": 108,
                        "decorators": [],
                        "name": "blah1",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 85,
                    "end": 96,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 92,
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 96,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 115,
                "end": 140,
                "directive": null,
                "expression": {
                  "type": "CallExpression",
                  "start": 115,
                  "end": 139,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 127,
                      "end": 138,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 127,
                        "end": 132
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 138,
                        "decorators": [],
                        "name": "blah2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 115,
                    "end": 126,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 122,
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 126,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
