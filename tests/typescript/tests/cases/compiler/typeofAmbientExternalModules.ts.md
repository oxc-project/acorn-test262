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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 31,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 17,
              "end": 29,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 17,
                "end": 20,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
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
              "value": null,
              "computed": false,
              "static": false,
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 24,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 22,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
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
      "type": "TSExportAssignment",
      "start": 25,
      "end": 36,
      "expression": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "ext",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "exp",
        "optional": false,
        "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 255,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 249,
            "decorators": [],
            "name": "y1",
            "optional": false,
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
                  "decorators": [],
                  "name": "ext",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 252,
            "end": 255,
            "decorators": [],
            "name": "ext",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "y1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 262,
          "end": 265,
          "decorators": [],
          "name": "exp",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 267,
      "end": 292,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 291,
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 285,
            "decorators": [],
            "name": "y2",
            "optional": false,
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
                  "decorators": [],
                  "name": "exp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 288,
            "end": 291,
            "decorators": [],
            "name": "exp",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "y2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 298,
          "end": 301,
          "decorators": [],
          "name": "ext",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
