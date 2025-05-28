__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 84,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
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
        "end": 84,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 17,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 16,
              "name": "a"
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 22,
            "end": 82,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 82,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 26,
                "end": 82,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 36,
                    "end": 44,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 36,
                      "end": 43,
                      "object": {
                        "type": "ThisExpression",
                        "start": 36,
                        "end": 40
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 41,
                        "end": 43,
                        "name": "a"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 59,
                    "end": 67,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 59,
                      "end": 66,
                      "object": {
                        "type": "ThisExpression",
                        "start": 59,
                        "end": 63
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 64,
                        "end": 66,
                        "name": "b"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
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
