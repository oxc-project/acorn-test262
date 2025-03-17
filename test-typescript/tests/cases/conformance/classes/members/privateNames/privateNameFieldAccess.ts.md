__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 103,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 103,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 39,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 22,
              "name": "myField"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 25,
              "end": 38,
              "raw": "\"hello world\"",
              "value": "hello world"
            }
          },
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 101,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 55,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 101,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 101,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 68,
                    "end": 95,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 68,
                      "end": 94,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 80,
                          "end": 93,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 80,
                            "end": 84
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 85,
                            "end": 93,
                            "name": "myField"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 68,
                        "end": 79,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 75,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 79,
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
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
