privateStaticNotAccessibleInClodule.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 206,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 152,
            "end": 172,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 163,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 177,
            "end": 204,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 145,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 208,
      "end": 255,
      "body": {
        "type": "TSModuleBlock",
        "start": 217,
        "end": 255,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 223,
            "end": 244,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 230,
              "end": 244,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 234,
                  "end": 243,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 238,
                    "end": 243,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 239,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 240,
                      "end": 243,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 215,
        "end": 216,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
