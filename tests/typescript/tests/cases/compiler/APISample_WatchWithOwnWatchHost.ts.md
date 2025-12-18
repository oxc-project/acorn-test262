__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 242,
                "end": 245
              },
              "start": 240,
              "end": 245
            },
            "start": 233,
            "end": 245
          },
          "init": null,
          "definite": false,
          "start": 233,
          "end": 245
        }
      ],
      "declare": true,
      "start": 221,
      "end": 246
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 257
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "typescript",
          "raw": "\"typescript\"",
          "start": 268,
          "end": 280
        },
        "start": 260,
        "end": 281
      },
      "importKind": "value",
      "start": 248,
      "end": 282
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "watchMain",
        "optional": false,
        "typeAnnotation": null,
        "start": 293,
        "end": 302
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "files",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 378,
                        "end": 384
                      },
                      "start": 378,
                      "end": 386
                    },
                    "start": 376,
                    "end": 386
                  },
                  "start": 371,
                  "end": 386
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 389,
                  "end": 391
                },
                "definite": false,
                "start": 371,
                "end": 391
              }
            ],
            "declare": false,
            "start": 365,
            "end": 392
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 412,
                          "end": 414
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "CompilerOptions",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 415,
                          "end": 430
                        },
                        "start": 412,
                        "end": 430
                      },
                      "typeArguments": null,
                      "start": 412,
                      "end": 430
                    },
                    "start": 410,
                    "end": 430
                  },
                  "start": 403,
                  "end": 430
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 433,
                  "end": 435
                },
                "definite": false,
                "start": 403,
                "end": 435
              }
            ],
            "declare": false,
            "start": 397,
            "end": 436
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 454,
                          "end": 456
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "WatchCompilerHostOfFilesAndCompilerOptions",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 457,
                          "end": 499
                        },
                        "start": 454,
                        "end": 499
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ts",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 500,
                                "end": 502
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "BuilderProgram",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 503,
                                "end": 517
                              },
                              "start": 500,
                              "end": 517
                            },
                            "typeArguments": null,
                            "start": 500,
                            "end": 517
                          }
                        ],
                        "start": 499,
                        "end": 518
                      },
                      "start": 454,
                      "end": 518
                    },
                    "start": 452,
                    "end": 518
                  },
                  "start": 448,
                  "end": 518
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rootFiles",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 531,
                        "end": 540
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "files",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 542,
                        "end": 547
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 531,
                      "end": 547
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 557,
                        "end": 564
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 557,
                        "end": 564
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 557,
                      "end": 564
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "useCaseSensitiveFileNames",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 575,
                        "end": 600
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 608,
                              "end": 610
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sys",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 611,
                              "end": 614
                            },
                            "optional": false,
                            "computed": false,
                            "start": 608,
                            "end": 614
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "useCaseSensitiveFileNames",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 615,
                            "end": 640
                          },
                          "optional": false,
                          "computed": false,
                          "start": 608,
                          "end": 640
                        },
                        "id": null,
                        "generator": false,
                        "start": 602,
                        "end": 640
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 575,
                      "end": 640
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getNewLine",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 650,
                        "end": 660
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 668,
                              "end": 670
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sys",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 671,
                              "end": 674
                            },
                            "optional": false,
                            "computed": false,
                            "start": 668,
                            "end": 674
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "newLine",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 675,
                            "end": 682
                          },
                          "optional": false,
                          "computed": false,
                          "start": 668,
                          "end": 682
                        },
                        "id": null,
                        "generator": false,
                        "start": 662,
                        "end": 682
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 650,
                      "end": 682
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getCurrentDirectory",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 692,
                        "end": 711
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 713,
                            "end": 715
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 716,
                            "end": 719
                          },
                          "optional": false,
                          "computed": false,
                          "start": 713,
                          "end": 719
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getCurrentDirectory",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 720,
                          "end": 739
                        },
                        "optional": false,
                        "computed": false,
                        "start": 713,
                        "end": 739
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 692,
                      "end": 739
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getDefaultLibFileName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 749,
                        "end": 770
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 772,
                            "end": 779
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 783,
                              "end": 785
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getDefaultLibFilePath",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 786,
                              "end": 807
                            },
                            "optional": false,
                            "computed": false,
                            "start": 783,
                            "end": 807
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "options",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 808,
                              "end": 815
                            }
                          ],
                          "optional": false,
                          "start": 783,
                          "end": 816
                        },
                        "id": null,
                        "generator": false,
                        "start": 772,
                        "end": 816
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 749,
                      "end": 816
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fileExists",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 827,
                        "end": 837
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 839,
                            "end": 841
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 842,
                            "end": 845
                          },
                          "optional": false,
                          "computed": false,
                          "start": 839,
                          "end": 845
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fileExists",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 846,
                          "end": 856
                        },
                        "optional": false,
                        "computed": false,
                        "start": 839,
                        "end": 856
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 827,
                      "end": 856
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "readFile",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 866,
                        "end": 874
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 876,
                            "end": 878
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 879,
                            "end": 882
                          },
                          "optional": false,
                          "computed": false,
                          "start": 876,
                          "end": 882
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "readFile",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 883,
                          "end": 891
                        },
                        "optional": false,
                        "computed": false,
                        "start": 876,
                        "end": 891
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 866,
                      "end": 891
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "directoryExists",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 901,
                        "end": 916
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 918,
                            "end": 920
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 921,
                            "end": 924
                          },
                          "optional": false,
                          "computed": false,
                          "start": 918,
                          "end": 924
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "directoryExists",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 925,
                          "end": 940
                        },
                        "optional": false,
                        "computed": false,
                        "start": 918,
                        "end": 940
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 901,
                      "end": 940
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getDirectories",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 950,
                        "end": 964
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 966,
                            "end": 968
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 969,
                            "end": 972
                          },
                          "optional": false,
                          "computed": false,
                          "start": 966,
                          "end": 972
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getDirectories",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 973,
                          "end": 987
                        },
                        "optional": false,
                        "computed": false,
                        "start": 966,
                        "end": 987
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 950,
                      "end": 987
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "readDirectory",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 997,
                        "end": 1010
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1012,
                            "end": 1014
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1015,
                            "end": 1018
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1012,
                          "end": 1018
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "readDirectory",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1019,
                          "end": 1032
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1012,
                        "end": 1032
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 997,
                      "end": 1032
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "realpath",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1042,
                        "end": 1050
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1052,
                            "end": 1054
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1055,
                            "end": 1058
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1052,
                          "end": 1058
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "realpath",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1059,
                          "end": 1067
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1052,
                        "end": 1067
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1042,
                      "end": 1067
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "watchFile",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1078,
                        "end": 1087
                      },
                      "value": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1089,
                              "end": 1091
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sys",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1092,
                              "end": 1095
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1089,
                            "end": 1095
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "watchFile",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1096,
                            "end": 1105
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1089,
                          "end": 1105
                        },
                        "start": 1089,
                        "end": 1106
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1078,
                      "end": 1106
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "watchDirectory",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1116,
                        "end": 1130
                      },
                      "value": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1132,
                              "end": 1134
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sys",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1135,
                              "end": 1138
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1132,
                            "end": 1138
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "watchDirectory",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1139,
                            "end": 1153
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1132,
                          "end": 1153
                        },
                        "start": 1132,
                        "end": 1154
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1116,
                      "end": 1154
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "createProgram",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1164,
                        "end": 1177
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1179,
                          "end": 1181
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "createAbstractBuilder",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1182,
                          "end": 1203
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1179,
                        "end": 1203
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1164,
                      "end": 1203
                    }
                  ],
                  "start": 521,
                  "end": 1209
                },
                "definite": false,
                "start": 448,
                "end": 1209
              }
            ],
            "declare": false,
            "start": 442,
            "end": 1210
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "origCreateProgram",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1428,
                  "end": 1445
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1448,
                    "end": 1452
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createProgram",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1453,
                    "end": 1466
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1448,
                  "end": 1466
                },
                "definite": false,
                "start": 1428,
                "end": 1466
              }
            ],
            "declare": false,
            "start": 1422,
            "end": 1467
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1472,
                  "end": 1476
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createProgram",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1477,
                  "end": 1490
                },
                "optional": false,
                "computed": false,
                "start": 1472,
                "end": 1490
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rootNames",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1494,
                    "end": 1503
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1505,
                    "end": 1512
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1514,
                    "end": 1518
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oldProgram",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1520,
                    "end": 1530
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1545,
                            "end": 1552
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1553,
                            "end": 1556
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1545,
                          "end": 1556
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "** We're about to create the program! **",
                            "raw": "\"** We're about to create the program! **\"",
                            "start": 1557,
                            "end": 1599
                          }
                        ],
                        "optional": false,
                        "start": 1545,
                        "end": 1600
                      },
                      "directive": null,
                      "start": 1545,
                      "end": 1601
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "origCreateProgram",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1617,
                          "end": 1634
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rootNames",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1635,
                            "end": 1644
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1646,
                            "end": 1653
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1655,
                            "end": 1659
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "oldProgram",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1661,
                            "end": 1671
                          }
                        ],
                        "optional": false,
                        "start": 1617,
                        "end": 1672
                      },
                      "start": 1610,
                      "end": 1673
                    }
                  ],
                  "start": 1535,
                  "end": 1679
                },
                "id": null,
                "generator": false,
                "start": 1493,
                "end": 1679
              },
              "start": 1472,
              "end": 1679
            },
            "directive": null,
            "start": 1472,
            "end": 1679
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "origPostProgramCreate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1690,
                  "end": 1711
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1714,
                    "end": 1718
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "afterProgramCreate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1719,
                    "end": 1737
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1714,
                  "end": 1737
                },
                "definite": false,
                "start": 1690,
                "end": 1737
              }
            ],
            "declare": false,
            "start": 1684,
            "end": 1738
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1744,
                  "end": 1748
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "afterProgramCreate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1749,
                  "end": 1767
                },
                "optional": false,
                "computed": false,
                "start": 1744,
                "end": 1767
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "program",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1770,
                    "end": 1777
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1791,
                            "end": 1798
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1799,
                            "end": 1802
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1791,
                          "end": 1802
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "** We finished making the program! **",
                            "raw": "\"** We finished making the program! **\"",
                            "start": 1803,
                            "end": 1842
                          }
                        ],
                        "optional": false,
                        "start": 1791,
                        "end": 1843
                      },
                      "directive": null,
                      "start": 1791,
                      "end": 1844
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "origPostProgramCreate",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1853,
                            "end": 1874
                          },
                          "start": 1853,
                          "end": 1875
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "program",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1876,
                            "end": 1883
                          }
                        ],
                        "optional": false,
                        "start": 1853,
                        "end": 1884
                      },
                      "directive": null,
                      "start": 1853,
                      "end": 1885
                    }
                  ],
                  "start": 1781,
                  "end": 1891
                },
                "id": null,
                "generator": false,
                "start": 1770,
                "end": 1891
              },
              "start": 1744,
              "end": 1891
            },
            "directive": null,
            "start": 1744,
            "end": 1892
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2004,
                  "end": 2006
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createWatchProgram",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2007,
                  "end": 2025
                },
                "optional": false,
                "computed": false,
                "start": 2004,
                "end": 2025
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2026,
                  "end": 2030
                }
              ],
              "optional": false,
              "start": 2004,
              "end": 2031
            },
            "directive": null,
            "start": 2004,
            "end": 2032
          }
        ],
        "start": 305,
        "end": 2034
      },
      "expression": false,
      "start": 284,
      "end": 2034
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "watchMain",
          "optional": false,
          "typeAnnotation": null,
          "start": 2036,
          "end": 2045
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2036,
        "end": 2047
      },
      "directive": null,
      "start": 2036,
      "end": 2048
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 221,
  "end": 2048
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 221,
    "end": 228,
    "range": [
      221,
      228
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 229,
    "end": 232,
    "range": [
      229,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 233,
    "end": 240,
    "range": [
      233,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 242,
    "end": 245,
    "range": [
      242,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 248,
    "end": 254,
    "range": [
      248,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 255,
    "end": 257,
    "range": [
      255,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 260,
    "end": 267,
    "range": [
      260,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "String",
    "value": "\"typescript\"",
    "start": 268,
    "end": 280,
    "range": [
      268,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 284,
    "end": 292,
    "range": [
      284,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "watchMain",
    "start": 293,
    "end": 302,
    "range": [
      293,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 365,
    "end": 370,
    "range": [
      365,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "files",
    "start": 371,
    "end": 376,
    "range": [
      371,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 378,
    "end": 384,
    "range": [
      378,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 397,
    "end": 402,
    "range": [
      397,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 403,
    "end": 410,
    "range": [
      403,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 412,
    "end": 414,
    "range": [
      412,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "CompilerOptions",
    "start": 415,
    "end": 430,
    "range": [
      415,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 442,
    "end": 447,
    "range": [
      442,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 448,
    "end": 452,
    "range": [
      448,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 454,
    "end": 456,
    "range": [
      454,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "WatchCompilerHostOfFilesAndCompilerOptions",
    "start": 457,
    "end": 499,
    "range": [
      457,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 500,
    "end": 502,
    "range": [
      500,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "BuilderProgram",
    "start": 503,
    "end": 517,
    "range": [
      503,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "rootFiles",
    "start": 531,
    "end": 540,
    "range": [
      531,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "files",
    "start": 542,
    "end": 547,
    "range": [
      542,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 557,
    "end": 564,
    "range": [
      557,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "useCaseSensitiveFileNames",
    "start": 575,
    "end": 600,
    "range": [
      575,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 605,
    "end": 607,
    "range": [
      605,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 608,
    "end": 610,
    "range": [
      608,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 611,
    "end": 614,
    "range": [
      611,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "useCaseSensitiveFileNames",
    "start": 615,
    "end": 640,
    "range": [
      615,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "getNewLine",
    "start": 650,
    "end": 660,
    "range": [
      650,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 665,
    "end": 667,
    "range": [
      665,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 668,
    "end": 670,
    "range": [
      668,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 671,
    "end": 674,
    "range": [
      671,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "newLine",
    "start": 675,
    "end": 682,
    "range": [
      675,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "getCurrentDirectory",
    "start": 692,
    "end": 711,
    "range": [
      692,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 713,
    "end": 715,
    "range": [
      713,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 716,
    "end": 719,
    "range": [
      716,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "getCurrentDirectory",
    "start": 720,
    "end": 739,
    "range": [
      720,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "getDefaultLibFileName",
    "start": 749,
    "end": 770,
    "range": [
      749,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 772,
    "end": 779,
    "range": [
      772,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 780,
    "end": 782,
    "range": [
      780,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 783,
    "end": 785,
    "range": [
      783,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "getDefaultLibFilePath",
    "start": 786,
    "end": 807,
    "range": [
      786,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 808,
    "end": 815,
    "range": [
      808,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "fileExists",
    "start": 827,
    "end": 837,
    "range": [
      827,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 839,
    "end": 841,
    "range": [
      839,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 842,
    "end": 845,
    "range": [
      842,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "fileExists",
    "start": 846,
    "end": 856,
    "range": [
      846,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 866,
    "end": 874,
    "range": [
      866,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 876,
    "end": 878,
    "range": [
      876,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 879,
    "end": 882,
    "range": [
      879,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 883,
    "end": 891,
    "range": [
      883,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "directoryExists",
    "start": 901,
    "end": 916,
    "range": [
      901,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 918,
    "end": 920,
    "range": [
      918,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 921,
    "end": 924,
    "range": [
      921,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "directoryExists",
    "start": 925,
    "end": 940,
    "range": [
      925,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "getDirectories",
    "start": 950,
    "end": 964,
    "range": [
      950,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 966,
    "end": 968,
    "range": [
      966,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 969,
    "end": 972,
    "range": [
      969,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Identifier",
    "value": "getDirectories",
    "start": 973,
    "end": 987,
    "range": [
      973,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "readDirectory",
    "start": 997,
    "end": 1010,
    "range": [
      997,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1012,
    "end": 1014,
    "range": [
      1012,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 1015,
    "end": 1018,
    "range": [
      1015,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "readDirectory",
    "start": 1019,
    "end": 1032,
    "range": [
      1019,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "realpath",
    "start": 1042,
    "end": 1050,
    "range": [
      1042,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1052,
    "end": 1054,
    "range": [
      1052,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 1055,
    "end": 1058,
    "range": [
      1055,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Identifier",
    "value": "realpath",
    "start": 1059,
    "end": 1067,
    "range": [
      1059,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Identifier",
    "value": "watchFile",
    "start": 1078,
    "end": 1087,
    "range": [
      1078,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1089,
    "end": 1091,
    "range": [
      1089,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 1092,
    "end": 1095,
    "range": [
      1092,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "watchFile",
    "start": 1096,
    "end": 1105,
    "range": [
      1096,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Identifier",
    "value": "watchDirectory",
    "start": 1116,
    "end": 1130,
    "range": [
      1116,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1132,
    "end": 1134,
    "range": [
      1132,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "sys",
    "start": 1135,
    "end": 1138,
    "range": [
      1135,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Identifier",
    "value": "watchDirectory",
    "start": 1139,
    "end": 1153,
    "range": [
      1139,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Identifier",
    "value": "createProgram",
    "start": 1164,
    "end": 1177,
    "range": [
      1164,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 1179,
    "end": 1181,
    "range": [
      1179,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Identifier",
    "value": "createAbstractBuilder",
    "start": 1182,
    "end": 1203,
    "range": [
      1182,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1422,
    "end": 1427,
    "range": [
      1422,
      1427
    ]
  },
  {
    "type": "Identifier",
    "value": "origCreateProgram",
    "start": 1428,
    "end": 1445,
    "range": [
      1428,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1448,
    "end": 1452,
    "range": [
      1448,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Identifier",
    "value": "createProgram",
    "start": 1453,
    "end": 1466,
    "range": [
      1453,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1472,
    "end": 1476,
    "range": [
      1472,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Identifier",
    "value": "createProgram",
    "start": 1477,
    "end": 1490,
    "range": [
      1477,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Identifier",
    "value": "rootNames",
    "start": 1494,
    "end": 1503,
    "range": [
      1494,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1505,
    "end": 1512,
    "range": [
      1505,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1514,
    "end": 1518,
    "range": [
      1514,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Identifier",
    "value": "oldProgram",
    "start": 1520,
    "end": 1530,
    "range": [
      1520,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1532,
    "end": 1534,
    "range": [
      1532,
      1534
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1545,
    "end": 1552,
    "range": [
      1545,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1553,
    "end": 1556,
    "range": [
      1553,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "String",
    "value": "\"** We're about to create the program! **\"",
    "start": 1557,
    "end": 1599,
    "range": [
      1557,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1610,
    "end": 1616,
    "range": [
      1610,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "origCreateProgram",
    "start": 1617,
    "end": 1634,
    "range": [
      1617,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Identifier",
    "value": "rootNames",
    "start": 1635,
    "end": 1644,
    "range": [
      1635,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 1646,
    "end": 1653,
    "range": [
      1646,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1653,
    "end": 1654,
    "range": [
      1653,
      1654
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1655,
    "end": 1659,
    "range": [
      1655,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "oldProgram",
    "start": 1661,
    "end": 1671,
    "range": [
      1661,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1684,
    "end": 1689,
    "range": [
      1684,
      1689
    ]
  },
  {
    "type": "Identifier",
    "value": "origPostProgramCreate",
    "start": 1690,
    "end": 1711,
    "range": [
      1690,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1714,
    "end": 1718,
    "range": [
      1714,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Identifier",
    "value": "afterProgramCreate",
    "start": 1719,
    "end": 1737,
    "range": [
      1719,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 1744,
    "end": 1748,
    "range": [
      1744,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Identifier",
    "value": "afterProgramCreate",
    "start": 1749,
    "end": 1767,
    "range": [
      1749,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Identifier",
    "value": "program",
    "start": 1770,
    "end": 1777,
    "range": [
      1770,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1778,
    "end": 1780,
    "range": [
      1778,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1791,
    "end": 1798,
    "range": [
      1791,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1799,
    "end": 1802,
    "range": [
      1799,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "String",
    "value": "\"** We finished making the program! **\"",
    "start": 1803,
    "end": 1842,
    "range": [
      1803,
      1842
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Identifier",
    "value": "origPostProgramCreate",
    "start": 1853,
    "end": 1874,
    "range": [
      1853,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Identifier",
    "value": "program",
    "start": 1876,
    "end": 1883,
    "range": [
      1876,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 2004,
    "end": 2006,
    "range": [
      2004,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Identifier",
    "value": "createWatchProgram",
    "start": 2007,
    "end": 2025,
    "range": [
      2007,
      2025
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2025,
    "end": 2026,
    "range": [
      2025,
      2026
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 2026,
    "end": 2030,
    "range": [
      2026,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Identifier",
    "value": "watchMain",
    "start": 2036,
    "end": 2045,
    "range": [
      2036,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2047,
    "end": 2048,
    "range": [
      2047,
      2048
    ]
  }
]
```
