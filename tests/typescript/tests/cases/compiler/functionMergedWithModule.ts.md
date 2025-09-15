__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "title",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 20,
              "end": 26
            },
            "start": 18,
            "end": 26
          },
          "start": 13,
          "end": 26
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 39
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 42,
                  "end": 44
                },
                "definite": false,
                "start": 38,
                "end": 44
              }
            ],
            "declare": false,
            "start": 34,
            "end": 45
          }
        ],
        "start": 28,
        "end": 47
      },
      "expression": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 62
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 66
        },
        "start": 59,
        "end": 66
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 90
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 93,
                "end": 100
              },
              "expression": false,
              "start": 80,
              "end": 100
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 73,
            "end": 100
          }
        ],
        "start": 67,
        "end": 102
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 49,
      "end": 102
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 117
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 118,
          "end": 121
        },
        "start": 114,
        "end": 121
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 145
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 158,
                          "end": 161
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 162,
                          "end": 163
                        },
                        "optional": false,
                        "computed": false,
                        "start": 158,
                        "end": 163
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 158,
                      "end": 165
                    },
                    "directive": null,
                    "start": 158,
                    "end": 166
                  }
                ],
                "start": 148,
                "end": 172
              },
              "expression": false,
              "start": 135,
              "end": 172
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 128,
            "end": 172
          }
        ],
        "start": 122,
        "end": 174
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 104,
      "end": 174
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 174
}
```
