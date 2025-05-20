__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "decorators": [],
            "name": "deco",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 21,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 18,
                "end": 21
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 74,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 37,
        "end": 74,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 51,
          "end": 74,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 57,
              "end": 72,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 64,
                "end": 67,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 67,
                "end": 72,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 70,
                  "end": 72,
                  "body": []
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
        "decorators": [
          {
            "type": "Decorator",
            "start": 24,
            "end": 29,
            "expression": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "deco",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 43,
          "end": 50,
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 76,
      "end": 128,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 83,
        "end": 128,
        "body": {
          "type": "TSModuleBlock",
          "start": 101,
          "end": 128,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 107,
              "end": 126,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 114,
                "end": 126,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 120,
                    "end": 125,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 121,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 124,
                      "end": 125,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ],
                "declare": false,
                "kind": "const"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 93,
          "end": 100,
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 144,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 143,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 130,
          "end": 141,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 130,
            "end": 137,
            "decorators": [],
            "name": "Example",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 138,
            "end": 141,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
