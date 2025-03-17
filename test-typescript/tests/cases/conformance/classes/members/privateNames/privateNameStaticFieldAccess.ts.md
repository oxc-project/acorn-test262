__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 156,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 46,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 21,
              "end": 29,
              "name": "myField"
            },
            "value": {
              "type": "Literal",
              "start": 32,
              "end": 45,
              "value": "hello world",
              "raw": "\"hello world\""
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
            "start": 51,
            "end": 154,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 62,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 154,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 154,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 75,
                    "end": 99,
                    "expression": {
                      "type": "CallExpression",
                      "start": 75,
                      "end": 98,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 75,
                        "end": 86,
                        "object": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 82,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 86,
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
                          "start": 87,
                          "end": 97,
                          "object": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 88,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 89,
                            "end": 97,
                            "name": "myField"
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 113,
                    "end": 140,
                    "expression": {
                      "type": "CallExpression",
                      "start": 113,
                      "end": 139,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 113,
                        "end": 124,
                        "object": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 120,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 121,
                          "end": 124,
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
                          "start": 125,
                          "end": 138,
                          "object": {
                            "type": "ThisExpression",
                            "start": 125,
                            "end": 129
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 130,
                            "end": 138,
                            "name": "myField"
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
