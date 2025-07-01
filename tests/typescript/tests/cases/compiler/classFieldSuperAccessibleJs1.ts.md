__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "blah1",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 24
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 27,
              "end": 30
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 12,
            "end": 31
          }
        ],
        "start": 8,
        "end": 33
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "blah2",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 41
          },
          "optional": false,
          "computed": false,
          "start": 34,
          "end": 41
        },
        "right": {
          "type": "Literal",
          "value": 456,
          "raw": "456",
          "start": 44,
          "end": 47
        },
        "start": 34,
        "end": 47
      },
      "directive": null,
      "start": 34,
      "end": 48
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 57
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 67
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 85,
                      "end": 92
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 93,
                      "end": 96
                    },
                    "optional": false,
                    "computed": false,
                    "start": 85,
                    "end": 96
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 97,
                        "end": 102
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "blah1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 103,
                        "end": 108
                      },
                      "optional": false,
                      "computed": false,
                      "start": 97,
                      "end": 108
                    }
                  ],
                  "optional": false,
                  "start": 85,
                  "end": 109
                },
                "directive": null,
                "start": 85,
                "end": 110
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "console",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 122
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 123,
                      "end": 126
                    },
                    "optional": false,
                    "computed": false,
                    "start": 115,
                    "end": 126
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 127,
                        "end": 132
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "blah2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 133,
                        "end": 138
                      },
                      "optional": false,
                      "computed": false,
                      "start": 127,
                      "end": 138
                    }
                  ],
                  "optional": false,
                  "start": 115,
                  "end": 139
                },
                "directive": null,
                "start": 115,
                "end": 140
              }
            ],
            "start": 72,
            "end": 144
          }
        ],
        "start": 68,
        "end": 146
      },
      "abstract": false,
      "declare": false,
      "start": 50,
      "end": 146
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 146
}
```
