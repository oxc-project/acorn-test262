__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 75,
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
        "end": 75,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 37,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 25,
              "end": 36,
              "callee": {
                "type": "MemberExpression",
                "start": 25,
                "end": 34,
                "object": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "PrivateIdentifier",
                  "start": 27,
                  "end": 34,
                  "name": "method"
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 73,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 49,
              "end": 56,
              "name": "method"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 56,
              "end": 73,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": 42,
                      "raw": "42"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 94,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 93,
        "callee": {
          "type": "MemberExpression",
          "start": 77,
          "end": 88,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 84,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 85,
            "end": 88,
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
            "start": 89,
            "end": 92,
            "object": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "s",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
