__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
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
      "end": 72,
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
        "end": 72,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 70,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 41,
              "decorators": [],
              "name": "symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 70,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 70,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 55,
                    "end": 64,
                    "argument": {
                      "type": "Literal",
                      "start": 62,
                      "end": 63,
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
            "static": false,
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
      "start": 74,
      "end": 154,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 92,
        "end": 95,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 154,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 152,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 109,
              "decorators": [],
              "name": "symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 152,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 113,
                "end": 152,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 123,
                    "end": 146,
                    "argument": {
                      "type": "CallExpression",
                      "start": 130,
                      "end": 145,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 130,
                        "end": 143,
                        "object": {
                          "type": "Super",
                          "start": 130,
                          "end": 135
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 142,
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
