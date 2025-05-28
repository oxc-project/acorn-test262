__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "SomeEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 14,
        "end": 24,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 18,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 25,
      "end": 89,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 40,
        "end": 89,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 55,
          "decorators": [],
          "name": "SomeClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 56,
          "end": 89,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 60,
              "end": 87,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "start": 78,
                "end": 86,
                "decorators": [],
                "name": "SomeEnum",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 22,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 22,
            "decorators": [],
            "name": "Def",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 34,
        "value": "./a",
        "raw": "\"./a\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 53,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 43,
            "end": 52,
            "object": {
              "type": "MemberExpression",
              "start": 43,
              "end": 48,
              "object": {
                "type": "Identifier",
                "start": 43,
                "end": 46,
                "decorators": [],
                "name": "Def",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
