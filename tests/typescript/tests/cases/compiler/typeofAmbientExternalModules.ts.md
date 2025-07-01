__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 20
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 22,
                  "end": 28
                },
                "start": 20,
                "end": 28
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 17,
              "end": 29
            }
          ],
          "start": 15,
          "end": 31
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 31
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 31
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 32
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 13
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 15,
                "end": 21
              },
              "start": 13,
              "end": 21
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 10,
            "end": 22
          }
        ],
        "start": 8,
        "end": 24
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 35
      },
      "start": 25,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ext",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 124
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./typeofAmbientExternalModules_0",
          "raw": "'./typeofAmbientExternalModules_0'",
          "start": 135,
          "end": 169
        },
        "start": 127,
        "end": 170
      },
      "importKind": "value",
      "start": 114,
      "end": 171
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exp",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 182
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./typeofAmbientExternalModules_1",
          "raw": "'./typeofAmbientExternalModules_1'",
          "start": 193,
          "end": 227
        },
        "start": 185,
        "end": 228
      },
      "importKind": "value",
      "start": 172,
      "end": 229
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 249
                },
                "typeArguments": null,
                "start": 239,
                "end": 249
              },
              "start": 237,
              "end": 249
            },
            "start": 235,
            "end": 249
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ext",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 255
          },
          "definite": false,
          "start": 235,
          "end": 255
        }
      ],
      "declare": false,
      "start": 231,
      "end": 256
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y1",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 259
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "exp",
          "optional": false,
          "typeAnnotation": null,
          "start": 262,
          "end": 265
        },
        "start": 257,
        "end": 265
      },
      "directive": null,
      "start": 257,
      "end": 266
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "exp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 285
                },
                "typeArguments": null,
                "start": 275,
                "end": 285
              },
              "start": 273,
              "end": 285
            },
            "start": 271,
            "end": 285
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "exp",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 291
          },
          "definite": false,
          "start": 271,
          "end": 291
        }
      ],
      "declare": false,
      "start": 267,
      "end": 292
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y2",
          "optional": false,
          "typeAnnotation": null,
          "start": 293,
          "end": 295
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ext",
          "optional": false,
          "typeAnnotation": null,
          "start": 298,
          "end": 301
        },
        "start": 293,
        "end": 301
      },
      "directive": null,
      "start": 293,
      "end": 302
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 114,
  "end": 302
}
```
