__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeBaseClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 26
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 27,
          "end": 30
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 30
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 30
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 48,
          "end": 61
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 62,
          "end": 65
        },
        "declare": false,
        "start": 38,
        "end": 65
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 31,
      "end": 65
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MergedClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 94
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "SomeInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 116
            },
            "typeArguments": null,
            "start": 103,
            "end": 116
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 117,
          "end": 120
        },
        "declare": false,
        "start": 73,
        "end": 120
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 66,
      "end": 120
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MergedClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 145
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeBaseClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 154,
          "end": 167
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 168,
              "end": 171
            }
          ],
          "start": 167,
          "end": 172
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 194
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                          "type": "Super",
                          "start": 201,
                          "end": 206
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 201,
                        "end": 208
                      },
                      "directive": null,
                      "start": 201,
                      "end": 209
                    }
                  ],
                  "start": 197,
                  "end": 212
                },
                "expression": false,
                "start": 194,
                "end": 212
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 176,
              "end": 212
            }
          ],
          "start": 173,
          "end": 214
        },
        "abstract": false,
        "declare": false,
        "start": 128,
        "end": 214
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 121,
      "end": 214
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 214
}
```
