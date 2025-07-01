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
        "start": 7,
        "end": 18
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
                "start": 38,
                "end": 48
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
                      "start": 66,
                      "end": 72
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 74,
                        "end": 80
                      },
                      "start": 72,
                      "end": 80
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 83,
                      "end": 85
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 59,
                    "end": 86
                  }
                ],
                "start": 49,
                "end": 92
              },
              "abstract": false,
              "declare": false,
              "start": 32,
              "end": 92
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 25,
            "end": 92
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
                "start": 110,
                "end": 125
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "MemberName",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 144
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 145,
                "end": 152
              },
              "abstract": false,
              "declare": false,
              "start": 104,
              "end": 152
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 97,
            "end": 152
          }
        ],
        "start": 19,
        "end": 154
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 154
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
            "start": 160,
            "end": 161
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
                "start": 168,
                "end": 179
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "MemberNameArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 195
              },
              "optional": false,
              "computed": false,
              "start": 168,
              "end": 195
            },
            "typeArguments": null,
            "arguments": [],
            "start": 164,
            "end": 197
          },
          "definite": false,
          "start": 160,
          "end": 197
        }
      ],
      "declare": false,
      "start": 156,
      "end": 197
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 197
}
```
