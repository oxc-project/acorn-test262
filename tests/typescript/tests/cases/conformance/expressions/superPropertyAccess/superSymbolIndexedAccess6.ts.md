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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 79,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 28,
        "end": 79,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 77,
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
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 77,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": true,
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
      "type": "ClassDeclaration",
      "start": 81,
      "end": 168,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 168,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 109,
            "end": 166,
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
            "value": {
              "type": "FunctionExpression",
              "start": 124,
              "end": 166,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 144,
                        "end": 157,
                        "object": {
                          "type": "Super",
                          "start": 144,
                          "end": 149
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 156,
                          "decorators": [],
                          "name": "symbol",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": true,
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
