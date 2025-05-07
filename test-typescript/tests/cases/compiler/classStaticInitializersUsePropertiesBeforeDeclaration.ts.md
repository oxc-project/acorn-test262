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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 131,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 43,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 33,
              "decorators": [],
              "name": "enumMember",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 36,
              "end": 42,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 36,
                "end": 40,
                "decorators": [],
                "name": "Enum",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 87,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 71,
              "decorators": [],
              "name": "objLiteralMember",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 74,
              "end": 86,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 74,
                "end": 84,
                "decorators": [],
                "name": "ObjLiteral",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 92,
            "end": 129,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 114,
              "decorators": [],
              "name": "namespaceMember",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 117,
              "end": 128,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 117,
                "end": 126,
                "decorators": [],
                "name": "Namespace",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 133,
      "end": 152,
      "body": {
        "type": "TSEnumBody",
        "start": 143,
        "end": 152,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 149,
            "end": 150,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 142,
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null
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
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 182,
                  "end": 183,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 188,
      "end": 232,
      "body": {
        "type": "TSModuleBlock",
        "start": 208,
        "end": 232,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 214,
            "end": 230,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 221,
              "end": 230,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 225,
                  "end": 230,
                  "definite": false,
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
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "let"
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
        "start": 198,
        "end": 207,
        "decorators": [],
        "name": "Namespace",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
