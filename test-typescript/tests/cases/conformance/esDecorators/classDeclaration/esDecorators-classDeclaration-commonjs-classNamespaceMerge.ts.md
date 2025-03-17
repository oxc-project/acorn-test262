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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "name": "deco",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 21,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 18,
                "end": 21
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
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 74,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 37,
        "end": 74,
        "id": {
          "type": "Identifier",
          "start": 43,
          "end": 50,
          "name": "Example",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 51,
          "end": 74,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 57,
              "end": 72,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 64,
                "end": 67,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 67,
                "end": 72,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 70,
                  "end": 72,
                  "body": []
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
        "decorators": [
          {
            "type": "Decorator",
            "start": 24,
            "end": 29,
            "expression": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "name": "deco",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 76,
      "end": 128,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 83,
        "end": 128,
        "id": {
          "type": "Identifier",
          "start": 93,
          "end": 100,
          "name": "Example",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 101,
          "end": 128,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 107,
              "end": 126,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 114,
                "end": 126,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 120,
                    "end": 125,
                    "id": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 121,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 124,
                      "end": 125,
                      "value": 1,
                      "raw": "1"
                    },
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 144,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 143,
        "callee": {
          "type": "MemberExpression",
          "start": 130,
          "end": 141,
          "object": {
            "type": "Identifier",
            "start": 130,
            "end": 137,
            "name": "Example",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 138,
            "end": 141,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
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
