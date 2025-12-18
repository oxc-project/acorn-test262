__ESTREE_TEST__:AST:
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
        "name": "Controller",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 16
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 29
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 32,
                "end": 39
              },
              "expression": false,
              "start": 29,
              "end": 39
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 23,
            "end": 39
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "delete",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 50
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 53,
                "end": 60
              },
              "expression": false,
              "start": 50,
              "end": 60
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 44,
            "end": 60
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "var",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 68
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 71,
                "end": 78
              },
              "expression": false,
              "start": 68,
              "end": 78
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 65,
            "end": 78
          }
        ],
        "start": 17,
        "end": 80
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 80
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IScope",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 98
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 111
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Controller",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 120,
                      "end": 130
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 140
                    },
                    "start": 120,
                    "end": 140
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "create",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 147
                  },
                  "start": 120,
                  "end": 147
                },
                "typeArguments": null,
                "start": 113,
                "end": 147
              },
              "start": 111,
              "end": 147
            },
            "accessibility": null,
            "static": false,
            "start": 105,
            "end": 148
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "delete",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 161
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Controller",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 170,
                      "end": 180
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 190
                    },
                    "start": 170,
                    "end": 190
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "delete",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 197
                  },
                  "start": 170,
                  "end": 197
                },
                "typeArguments": null,
                "start": 163,
                "end": 197
              },
              "start": 161,
              "end": 197
            },
            "accessibility": null,
            "static": false,
            "start": 155,
            "end": 198
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "var",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 227
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Controller",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 236,
                      "end": 246
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 256
                    },
                    "start": 236,
                    "end": 256
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "var",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 260
                  },
                  "start": 236,
                  "end": 260
                },
                "typeArguments": null,
                "start": 229,
                "end": 260
              },
              "start": 227,
              "end": 260
            },
            "accessibility": null,
            "static": false,
            "start": 224,
            "end": 261
          }
        ],
        "start": 99,
        "end": 290
      },
      "declare": false,
      "start": 82,
      "end": 290
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 290
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "Controller",
    "start": 6,
    "end": 16,
    "range": [
      6,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 23,
    "end": 29,
    "range": [
      23,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 44,
    "end": 50,
    "range": [
      44,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "var",
    "start": 65,
    "end": 68,
    "range": [
      65,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 82,
    "end": 91,
    "range": [
      82,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "IScope",
    "start": 92,
    "end": 98,
    "range": [
      92,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 105,
    "end": 111,
    "range": [
      105,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 113,
    "end": 119,
    "range": [
      113,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "Controller",
    "start": 120,
    "end": 130,
    "range": [
      120,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 131,
    "end": 140,
    "range": [
      131,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 141,
    "end": 147,
    "range": [
      141,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 155,
    "end": 161,
    "range": [
      155,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 163,
    "end": 169,
    "range": [
      163,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "Controller",
    "start": 170,
    "end": 180,
    "range": [
      170,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 181,
    "end": 190,
    "range": [
      181,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "delete",
    "start": 191,
    "end": 197,
    "range": [
      191,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "var",
    "start": 224,
    "end": 227,
    "range": [
      224,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 229,
    "end": 235,
    "range": [
      229,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "Controller",
    "start": 236,
    "end": 246,
    "range": [
      236,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 247,
    "end": 256,
    "range": [
      247,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "var",
    "start": 257,
    "end": 260,
    "range": [
      257,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  }
]
```
