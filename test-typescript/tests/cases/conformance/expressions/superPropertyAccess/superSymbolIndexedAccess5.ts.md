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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "name": "symbol",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 15,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 12,
                "end": 15
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 27,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 28,
        "end": 72,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 70,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 41,
              "name": "symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 70,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
      "type": "ClassDeclaration",
      "start": 74,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 92,
        "end": 95,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 154,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 152,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 109,
              "name": "symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 152,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "symbol",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
