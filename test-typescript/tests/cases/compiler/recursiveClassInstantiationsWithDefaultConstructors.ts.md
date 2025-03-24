__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 197,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 18,
        "name": "TypeScript2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 154,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 92,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 32,
              "end": 92,
              "id": {
                "type": "Identifier",
                "start": 38,
                "end": 48,
                "name": "MemberName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 49,
                "end": 92,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 59,
                    "end": 86,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 72,
                      "name": "prefix",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 83,
                      "end": 85,
                      "value": "",
                      "raw": "\"\""
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 72,
                      "end": 80,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 74,
                        "end": 80
                      }
                    },
                    "accessibility": "public"
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 97,
            "end": 152,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 104,
              "end": 152,
              "id": {
                "type": "Identifier",
                "start": 110,
                "end": 125,
                "name": "MemberNameArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 134,
                "end": 144,
                "name": "MemberName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 145,
                "end": 152,
                "body": []
              },
              "decorators": [],
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 197,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 161,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 164,
            "end": 197,
            "callee": {
              "type": "MemberExpression",
              "start": 168,
              "end": 195,
              "object": {
                "type": "Identifier",
                "start": 168,
                "end": 179,
                "name": "TypeScript2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 180,
                "end": 195,
                "name": "MemberNameArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
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
