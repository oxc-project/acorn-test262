__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript2",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MemberName",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 51
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prefix",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 69,
                      "end": 75
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 77,
                        "end": 83
                      },
                      "start": 75,
                      "end": 83
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 86,
                      "end": 88
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 62,
                    "end": 89
                  }
                ],
                "start": 52,
                "end": 95
              },
              "abstract": false,
              "declare": false,
              "start": 35,
              "end": 95
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 28,
            "end": 95
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MemberNameArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 128
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "MemberName",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 147
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 148,
                "end": 155
              },
              "abstract": false,
              "declare": false,
              "start": 107,
              "end": 155
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 100,
            "end": 155
          }
        ],
        "start": 22,
        "end": 157
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 157
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 164
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypeScript2",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 182
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "MemberNameArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 198
              },
              "optional": false,
              "computed": false,
              "start": 171,
              "end": 198
            },
            "typeArguments": null,
            "arguments": [],
            "start": 167,
            "end": 200
          },
          "definite": false,
          "start": 163,
          "end": 200
        }
      ],
      "declare": false,
      "start": 159,
      "end": 200
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 200
}
```
