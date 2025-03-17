__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 162,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "name": "undefined",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 33,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 31,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
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
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              }
            },
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
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 53,
        "name": "undefined",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 54,
        "end": 74,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 57,
            "end": 72,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 63,
              "name": "member",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 63,
              "end": 71,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 65,
                "end": 71
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 75,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 94,
        "name": "undefined",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 95,
        "end": 118,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 98,
            "end": 116,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 105,
              "end": 116,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 109,
                  "end": 115,
                  "id": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 113,
                    "end": 115,
                    "value": 42,
                    "raw": "42"
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
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 135,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 135,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 126,
                "end": 135
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
      "type": "VariableDeclaration",
      "start": 137,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 160,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 144,
                "end": 160,
                "exprName": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 160,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
