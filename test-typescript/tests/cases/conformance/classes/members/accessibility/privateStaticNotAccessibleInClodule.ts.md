__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 138,
  "end": 255,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 138,
      "end": 206,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 145,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 206,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 152,
            "end": 172,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 163,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 171,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 165,
                "end": 171
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 177,
            "end": 204,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 203,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 197,
                "end": 203
              }
            },
            "accessibility": "private"
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
      "type": "TSModuleDeclaration",
      "start": 208,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 216,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 217,
        "end": 255,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 223,
            "end": 244,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 230,
              "end": 244,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 234,
                  "end": 243,
                  "id": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 238,
                    "end": 243,
                    "object": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 239,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 240,
                      "end": 243,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
