__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 101,
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
        "end": 101,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 28,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 19,
              "end": 21,
              "name": "x"
            },
            "value": {
              "type": "Literal",
              "start": 24,
              "end": 27,
              "value": 123,
              "raw": "123"
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
            "type": "StaticBlock",
            "start": 32,
            "end": 66,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 45,
                "end": 62,
                "expression": {
                  "type": "CallExpression",
                  "start": 45,
                  "end": 62,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 45,
                    "end": 56,
                    "object": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 52,
                      "name": "console",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 56,
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
                      "start": 57,
                      "end": 61,
                      "object": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 58,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 59,
                        "end": 61,
                        "name": "x"
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
            ]
          },
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 99,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 74,
              "end": 99,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 99,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 83,
                    "end": 95,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 90,
                      "end": 94,
                      "object": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 91,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 92,
                        "end": 94,
                        "name": "x"
                      },
                      "computed": false,
                      "optional": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
