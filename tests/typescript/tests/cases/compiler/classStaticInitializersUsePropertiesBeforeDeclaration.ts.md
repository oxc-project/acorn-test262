__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 232,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 131,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 131,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 43,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 33,
              "decorators": [],
              "name": "enumMember",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 36,
              "end": 42,
              "object": {
                "type": "Identifier",
                "start": 36,
                "end": 40,
                "decorators": [],
                "name": "Enum",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 87,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 71,
              "decorators": [],
              "name": "objLiteralMember",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 74,
              "end": 86,
              "object": {
                "type": "Identifier",
                "start": 74,
                "end": 84,
                "decorators": [],
                "name": "ObjLiteral",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 92,
            "end": 129,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 114,
              "decorators": [],
              "name": "namespaceMember",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 117,
              "end": 128,
              "object": {
                "type": "Identifier",
                "start": 117,
                "end": 126,
                "decorators": [],
                "name": "Namespace",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 133,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 142,
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 143,
        "end": 152,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 149,
            "end": 150,
            "id": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "A",
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
      "type": "VariableDeclaration",
      "start": 154,
      "end": 186,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 170,
            "decorators": [],
            "name": "ObjLiteral",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 173,
            "end": 185,
            "properties": [
              {
                "type": "Property",
                "start": 179,
                "end": 183,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 182,
                  "end": 183,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 188,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 207,
        "decorators": [],
        "name": "Namespace",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 208,
        "end": 232,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 214,
            "end": 230,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 221,
              "end": 230,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 225,
                  "end": 230,
                  "id": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 229,
                    "end": 230,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
