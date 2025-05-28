__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 72,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 8,
            "end": 71,
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": {
              "type": "ClassExpression",
              "start": 22,
              "end": 61,
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "ClassExpression",
                "start": 36,
                "end": 51,
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 42,
                  "end": 51,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 44,
                      "end": 49,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 45,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "start": 48,
                        "end": 49,
                        "value": 1,
                        "raw": "1"
                      },
                      "computed": false,
                      "static": false,
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
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 52,
                "end": 61,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 54,
                    "end": 59,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 55,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 58,
                      "end": 59,
                      "value": 2,
                      "raw": "2"
                    },
                    "computed": false,
                    "static": false,
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
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 62,
              "end": 71,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 64,
                  "end": 69,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "start": 68,
                    "end": 69,
                    "value": 3,
                    "raw": "3"
                  },
                  "computed": false,
                  "static": false,
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 89,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 81,
            "end": 88,
            "callee": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 92,
          "end": 93,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
