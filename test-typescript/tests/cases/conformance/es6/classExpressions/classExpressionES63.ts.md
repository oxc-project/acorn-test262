__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 8,
            "end": 71,
            "id": null,
            "superClass": {
              "type": "ClassExpression",
              "start": 22,
              "end": 61,
              "id": null,
              "superClass": {
                "type": "ClassExpression",
                "start": 36,
                "end": 51,
                "id": null,
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 42,
                  "end": 51,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 44,
                      "end": 49,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 45,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 48,
                        "end": 49,
                        "value": 1,
                        "raw": "1"
                      },
                      "decorators": [],
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "typeAnnotation": null,
                      "accessibility": null
                    }
                  ]
                },
                "decorators": [],
                "typeParameters": null,
                "implements": [],
                "abstract": false,
                "declare": false,
                "superTypeArguments": null
              },
              "body": {
                "type": "ClassBody",
                "start": 52,
                "end": 61,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 54,
                    "end": 59,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 55,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 58,
                      "end": 59,
                      "value": 2,
                      "raw": "2"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "body": {
              "type": "ClassBody",
              "start": 62,
              "end": 71,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 64,
                  "end": 69,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 68,
                    "end": 69,
                    "value": 3,
                    "raw": "3"
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 81,
            "end": 88,
            "callee": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 90,
      "end": 94,
      "expression": {
        "type": "MemberExpression",
        "start": 90,
        "end": 93,
        "object": {
          "type": "Identifier",
          "start": 90,
          "end": 91,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 92,
          "end": 93,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 99,
      "expression": {
        "type": "MemberExpression",
        "start": 95,
        "end": 98,
        "object": {
          "type": "Identifier",
          "start": 95,
          "end": 96,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 100,
      "end": 104,
      "expression": {
        "type": "MemberExpression",
        "start": 100,
        "end": 103,
        "object": {
          "type": "Identifier",
          "start": 100,
          "end": 101,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
