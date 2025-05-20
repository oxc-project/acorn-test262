__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "symbol",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 15,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 12,
                "end": 15
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 79,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 28,
        "end": 79,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 77,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 48,
              "decorators": [],
              "name": "symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 77,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 77,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 71,
                    "argument": {
                      "type": "Literal",
                      "start": 69,
                      "end": 70,
                      "raw": "0",
                      "value": 0
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
        "start": 24,
        "end": 27,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 81,
      "end": 168,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 168,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 109,
            "end": 166,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 123,
              "decorators": [],
              "name": "symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 124,
              "end": 166,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 166,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 137,
                    "end": 160,
                    "argument": {
                      "type": "CallExpression",
                      "start": 144,
                      "end": 159,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 144,
                        "end": 157,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 144,
                          "end": 149
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 156,
                          "decorators": [],
                          "name": "symbol",
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
        "start": 87,
        "end": 90,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 99,
        "end": 102,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
