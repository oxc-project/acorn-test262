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
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 74,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 43,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 25,
              "end": 42,
              "callee": {
                "type": "MemberExpression",
                "start": 25,
                "end": 40,
                "object": {
                  "type": "NewExpression",
                  "start": 25,
                  "end": 32,
                  "callee": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "property": {
                  "type": "PrivateIdentifier",
                  "start": 33,
                  "end": 40,
                  "name": "method"
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 72,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 48,
              "end": 55,
              "name": "method"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 72,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 72,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 60,
                    "end": 70,
                    "argument": {
                      "type": "Literal",
                      "start": 67,
                      "end": 69,
                      "value": 42,
                      "raw": "42"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 93,
      "expression": {
        "type": "CallExpression",
        "start": 76,
        "end": 92,
        "callee": {
          "type": "MemberExpression",
          "start": 76,
          "end": 87,
          "object": {
            "type": "Identifier",
            "start": 76,
            "end": 83,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 84,
            "end": 87,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 88,
            "end": 91,
            "object": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
