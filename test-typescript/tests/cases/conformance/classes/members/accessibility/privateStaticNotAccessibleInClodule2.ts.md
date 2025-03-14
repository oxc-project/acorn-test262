__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 138,
  "end": 298,
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
      "type": "ClassDeclaration",
      "start": 208,
      "end": 249,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 226,
        "end": 249,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 232,
            "end": 244,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 235,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 235,
              "end": 243,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 237,
                "end": 243
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
        "start": 214,
        "end": 215,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 224,
        "end": 225,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 251,
      "end": 298,
      "body": {
        "type": "TSModuleBlock",
        "start": 260,
        "end": 298,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 266,
            "end": 287,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 273,
              "end": 287,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 277,
                  "end": 286,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 278,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 281,
                    "end": 286,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 283,
                      "end": 286,
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
        "start": 258,
        "end": 259,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
