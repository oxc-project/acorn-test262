__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 138,
  "end": 295,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 138,
      "end": 214,
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
        "end": 214,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 152,
            "end": 178,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 169,
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
              "start": 169,
              "end": 177,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 171,
                "end": 177
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 183,
            "end": 212,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 200,
              "end": 203,
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
              "start": 203,
              "end": 211,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 205,
                "end": 211
              }
            },
            "accessibility": "protected"
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
      "start": 216,
      "end": 295,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 224,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 225,
        "end": 295,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 231,
            "end": 252,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 238,
              "end": 252,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 242,
                  "end": 251,
                  "id": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 243,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 246,
                    "end": 251,
                    "object": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 247,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 251,
                      "name": "foo",
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 263,
            "end": 284,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 270,
              "end": 284,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 274,
                  "end": 283,
                  "id": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 275,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 278,
                    "end": 283,
                    "object": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 279,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 283,
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
