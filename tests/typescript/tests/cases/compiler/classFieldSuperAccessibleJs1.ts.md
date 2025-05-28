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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 33,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 31,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 24,
              "decorators": [],
              "name": "blah1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 27,
              "end": 30,
              "value": 123,
              "raw": "123"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 34,
      "end": 48,
      "expression": {
        "type": "AssignmentExpression",
        "start": 34,
        "end": 47,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 34,
          "end": 41,
          "object": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 36,
            "end": 41,
            "decorators": [],
            "name": "blah2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 44,
          "end": 47,
          "value": 456,
          "raw": "456"
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 50,
      "end": 146,
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
      "typeParameters": null,
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
      "implements": [],
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
                "expression": {
                  "type": "CallExpression",
                  "start": 85,
                  "end": 109,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 85,
                    "end": 96,
                    "object": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 92,
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 96,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 97,
                      "end": 108,
                      "object": {
                        "type": "Super",
                        "start": 97,
                        "end": 102
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 103,
                        "end": 108,
                        "decorators": [],
                        "name": "blah1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  ],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 115,
                "end": 140,
                "expression": {
                  "type": "CallExpression",
                  "start": 115,
                  "end": 139,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 115,
                    "end": 126,
                    "object": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 122,
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 126,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 127,
                      "end": 138,
                      "object": {
                        "type": "Super",
                        "start": 127,
                        "end": 132
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 138,
                        "decorators": [],
                        "name": "blah2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  ],
                  "optional": false
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
