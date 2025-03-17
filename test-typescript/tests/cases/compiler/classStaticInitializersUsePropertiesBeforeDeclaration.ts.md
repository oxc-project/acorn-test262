__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 233,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 131,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 43,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 33,
              "name": "enumMember",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 36,
              "end": 42,
              "object": {
                "type": "Identifier",
                "start": 36,
                "end": 40,
                "name": "Enum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 87,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 71,
              "name": "objLiteralMember",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 74,
              "end": 86,
              "object": {
                "type": "Identifier",
                "start": 74,
                "end": 84,
                "name": "ObjLiteral",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 92,
            "end": 129,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 114,
              "name": "namespaceMember",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 117,
              "end": 128,
              "object": {
                "type": "Identifier",
                "start": 117,
                "end": 126,
                "name": "Namespace",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "TSEnumDeclaration",
      "start": 133,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 142,
        "name": "Enum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 149,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 170,
            "name": "ObjLiteral",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 182,
                  "end": 183,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "Namespace",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 225,
                  "end": 230,
                  "id": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "let",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
