__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 31,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 31,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 31,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 17,
              "end": 29,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17,
                "end": 20,
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
                "start": 20,
                "end": 28,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 22,
                  "end": 28
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
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "end": 37,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 24,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 22,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
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
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 15,
                "end": 21
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
      "type": "TSExportAssignment",
      "start": 25,
      "end": 36,
      "expression": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
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
  "start": 114,
  "end": 302,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 114,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 124,
        "name": "ext",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 127,
        "end": 170,
        "expression": {
          "type": "Literal",
          "start": 135,
          "end": 169,
          "value": "./typeofAmbientExternalModules_0",
          "raw": "'./typeofAmbientExternalModules_0'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 172,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 182,
        "name": "exp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 185,
        "end": 228,
        "expression": {
          "type": "Literal",
          "start": 193,
          "end": 227,
          "value": "./typeofAmbientExternalModules_1",
          "raw": "'./typeofAmbientExternalModules_1'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 256,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 255,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 249,
            "name": "y1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 249,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 239,
                "end": 249,
                "exprName": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 249,
                  "name": "ext",
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
          "init": {
            "type": "Identifier",
            "start": 252,
            "end": 255,
            "name": "ext",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 257,
      "end": 266,
      "expression": {
        "type": "AssignmentExpression",
        "start": 257,
        "end": 265,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 257,
          "end": 259,
          "name": "y1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 262,
          "end": 265,
          "name": "exp",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 267,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 291,
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 285,
            "name": "y2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 273,
              "end": 285,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 275,
                "end": 285,
                "exprName": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 285,
                  "name": "exp",
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
          "init": {
            "type": "Identifier",
            "start": 288,
            "end": 291,
            "name": "exp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 293,
      "end": 302,
      "expression": {
        "type": "AssignmentExpression",
        "start": 293,
        "end": 301,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 293,
          "end": 295,
          "name": "y2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 298,
          "end": 301,
          "name": "ext",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
