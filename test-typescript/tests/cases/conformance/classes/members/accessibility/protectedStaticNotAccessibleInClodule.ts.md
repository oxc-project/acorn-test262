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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 214,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 152,
            "end": 178,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 169,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 183,
            "end": 212,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 200,
              "end": 203,
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
              "start": 203,
              "end": 211,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 205,
                "end": 211
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
      "start": 216,
      "end": 295,
      "body": {
        "type": "TSModuleBlock",
        "start": 225,
        "end": 295,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 231,
            "end": 252,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 238,
              "end": 252,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 242,
                  "end": 251,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 242,
                    "end": 243,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 246,
                    "end": 251,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 247,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 251,
                      "decorators": [],
                      "name": "foo",
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 263,
            "end": 284,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 270,
              "end": 284,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 274,
                  "end": 283,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 275,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 278,
                    "end": 283,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 279,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 283,
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
        "start": 223,
        "end": 224,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
