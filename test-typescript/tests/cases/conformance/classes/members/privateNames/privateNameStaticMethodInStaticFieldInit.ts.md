__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 75,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 75,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 37,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 25,
              "end": 36,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 25,
                "end": 34,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "PrivateIdentifier",
                  "start": 27,
                  "end": 34,
                  "name": "method"
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 73,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 49,
              "end": 56,
              "name": "method"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 56,
              "end": 73,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 59,
                "end": 73,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 61,
                    "end": 71,
                    "argument": {
                      "type": "Literal",
                      "start": 68,
                      "end": 70,
                      "raw": "42",
                      "value": 42
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
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
      "start": 77,
      "end": 94,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 93,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 89,
            "end": 92,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 77,
          "end": 88,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 84,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 85,
            "end": 88,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
